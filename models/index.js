const User = require('./Users');
const Blogpost = require('./blogpost');
const Comments = require('./comments');

User.hasMany(Blogpost, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE',
});

 User.hasMany(Comments, {
    foreignkey: 'user_id'
});

Blogpost.belongsTo(User, {
    foreignkey: 'user_id'
})

 Blogpost.hasMany(Comments, {
     foreignkey: 'post_id'
 });

Comments.belongsTo(Blogpost,{
    foreignkey: 'post_id'
})

Comments.belongsTo(User,{
    foreignkey: 'user_id'
});

module.exports = {User, Blogpost, Comments}