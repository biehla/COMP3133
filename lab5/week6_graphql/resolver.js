const StudentModel = require('./models/Student');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    students: async () => {
      return await StudentModel.find();
    },
  },
  Mutation: {
    createStudent: async (_, { firstname, lastname, email }) => {
      const student = new StudentModel({ firstname, lastname, email });
      await student.save();
      return student;
    },
    createNewStudent: async (_, { input }) => {
      const student = new StudentModel(input);
      await student.save();
      return student;
    }
  }
}

module.exports = resolvers;
