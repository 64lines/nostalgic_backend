module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd0a5ca834bbd7157dda8bda0a8cc40cf'),
  },
});
