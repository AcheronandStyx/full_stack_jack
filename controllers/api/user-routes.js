const router = require("express").Router();
const { User, Score, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
// http://localhost:3001/api/users
router.get("/", (req, res) => {
  User.findAll({
    // attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get user by id
// http://localhost:3001/api/users/5
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Score, // also return any scores tied to this user
        attributes: ["id", "score", "created_at"],
      },
      {
        model: Comment,
        attributes: ["comment_text", "created_at"],
      },
    ],
  })
    .then((dbUserData) => {
      console.log(dbUserData);
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new user
// http://localhost:3001/api/users
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        // save user_id and username of the user
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// backend login handler
router.post("/login", (req, res) => {
  // expects {username: "test1", password: "password1234"}
  User.findOne({
    where: {
      // We're requiring unique usernames so this works
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      // if no match found
      res.status(400).json({ message: "No user with that username!" });
      return;
    }

    // declare variable to be passed into helper functions
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      // if password is invalid complain at user
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      console.log(dbUserData);
      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Update user profile
router.put("/:id", withAuth, (req, res) => {
  User.update(req.body, {
    // use req.body to only update the parts that are passed in
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete user
// http://localhost:3001/api/users/1
router.delete("/:id", withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
