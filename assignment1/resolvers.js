const crypto = require('node:crypto');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongoose').Types;

const Employee = require('./models/employee');
const User = require('./models/user');


const resolvers = {
  Query: {
    getAllEmployees: async () => {
      const allEmployees = await Employee.find().exec();
      if (allEmployees === null) {
        return [null]
      }
      return allEmployees;
    },

    login: async (_, { username, password }) => {
      // login and set jwt
      if (username === undefined || password === undefined) {
        return `Username and password must be filled`
      }
      if (username.length > 0) {
        const user = await User.findOne({ username: username }).exec();

        const hash = crypto.createHash('sha256').update(password + user._id).digest('hex');

        if (user.password === hash) {
          const payload = {
            username: user.username,
            issue_time: Date.now()
          }
          const token = jwt.sign(payload, user._id.toString(), { expiresIn: '30m' });
          return token
        }
      }

      return 'Invalid username or password'
    },

    getEmployeeById: async (_, { id }) => {
      const employee = await Employee.findOne({ _id: id }).exec();

      if (employee === null) {
        return null
      }

      return employee;
    }
  },


  Mutation: {
    signUp: async (_, { username, email, password }) => {
      const id = new ObjectId;
      const user = new User({
        _id: id,
        username: username,
        email: email,
        password: crypto.createHash('sha256').update(password + id).digest('hex')
      });
      await user.save();
      const payload = {
        username: user.username,
        issue_time: Date.now()
      }
      const token = jwt.sign(payload, user._id.toString(), { expiresIn: '30m' });
      return token
    },

    addEmployee: async (_, { firstName, lastName, email, gender, salary }) => {
      // add employee
      const employee = new Employee({
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        salary: salary,
      });

      const result = await employee.save()
      return result
    },

    /*
    updateEmployee: (eid,) => {
      // update employee
    },
    deleteEmployee: () => {
      // delete employee
    },
    */
  },
};

module.exports = resolvers;
