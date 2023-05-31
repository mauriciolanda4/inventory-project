import { Router } from "express";
import { check } from "express-validator";
import validate from "../utils/validation";
const userRouter = Router();

/**
 * @openapi
 * /Users:
 *   get:
 *     tags:
 *       - Users
 *     parameters:
 *       - name: offset
 *         in: query
 *         type: integer
 *         description: The number of items to skip before starting to collect the result set.
 *       - name: limit
 *         in: query
 *         type: integer
 *         description: The maximum numbers of items to return.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             examples:
 *               jsonObject:
 *                 summary: An example JSON response
 *                 value: '[{ "id": 1, "firstName": "Sundar", "lastName": "Pichai", "displayImageUrl": "https://thispersondoesnotexist.com/image", "email": "sundar.pichai@google.com", "phone": "0800001066", "jobTitle": "CEO", "role": { "id": 1, "description": "Admin" } }, { "id": 2, "firstName": "Matt", "lastName": "Cutts", "displayImageUrl": "https://thispersondoesnotexist.com/image", "email": "matt.cutts@google.com", "phone": "0800001066", "jobTitle": "Software Dev", "role": { "id": 2, "description": "Sales Rep" } }]'
 *       204:
 *         description: No Content
 *         content:
 *           application/json:
 *             examples:
 *               jsonObject:
 *                 summary: An example JSON response
 *                 value: '{ "message": "No Content" }'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             examples:
 *               jsonObject:
 *                 summary: An example JSON response
 *                 value: '{ "message": "Unauthorized" }'
 */

userRouter.route("/").get((req, res) => { res.send("Hello vue academy") });
userRouter.route("/:userId(\\d+)").get((req, res) => { res.send("Get Single vue academy" + req.params.userId) });
userRouter.route("/").post(
  [
    check("username")
      .trim()
      .isLength({ min: 3 })
      .withMessage("the name must have minimum length of 3"),
    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("your password should have min and max length between 8-15")
      .matches(/\d/)
      .withMessage("your password should have at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("your password should have at least one special character"),
    check("first_name")
      .trim()
      .isLength({ min: 4 })
      .withMessage("the first name must have minimum length of 3"),
    check("last_name")
      .trim()
      .isLength({ min: 3 })
      .withMessage("the last name must have minimum length of 3"),
  ],
  validate,
);
userRouter.route("/:userId(\\d+)").put((req, res) => { res.send("Update vue academy" + req.params.userId) });
userRouter.route("/:userId(\\d+)").delete((req, res) => { res.send("Delete vue academy" + req.params.userId) });

export { userRouter };
