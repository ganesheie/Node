const Course = require("../models/Course");

const courseResolvers = {
  courses: async ({ limit, sortOrder }) => {
    const order = sortOrder === "ASC" ? "ASC" : "DESC";
    return await Course.findAll({
      limit,
      order: [["title", order]],
    });
  },
  course: async ({ id }) => {
    return await Course.findByPk(id);
  },
  addCourse: async ({ input }) => {
    return await Course.create(input);
  },
  updateCourse: async ({ id, input }) => {
    const course = await Course.findByPk(id);
    if (course) {
      return await course.update(input);
    }
    throw new Error("Course not found");
  },
  deleteCourse: async ({ id }) => {
    const course = await Course.findByPk(id);
    if (course) {
      await course.destroy();
      return "Course deleted successfully";
    }
    throw new Error("Course not found");
  },
};

module.exports = courseResolvers;
