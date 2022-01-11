module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '92969bf9bf72ad599e6f6fc4f66d638d'),
  },
});
