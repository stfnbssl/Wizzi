let User;
let md;
module.exports = md = {
    
    start: function(pUser) {
        User = pUser.getUser();
    },

    getByGithubLogin: function(profile) {
        var query = { email: profile.email };
        return new Promise((resolve, reject) => {        
            User.find(query, function(err, result) {
                if (err) return reject(err);
                if (result.length == 1) return resolve(result[0]._doc);
                return reject({message: 'user not found'});
            });
        });
    },
    
    validateNotUsed: function(chosenUserid, profile) {
        return new Promise((resolve, reject) => {
            let query = { userid: chosenUserid };
            User.find(query, function(err, result) {
                if (err) return reject(err);
                if (result.length == 1) return reject({message: 'userid already in use'});
                let query = { email: profile.email };
                User.find(query, function(err, result) {
                    if (err) return reject(err);
                    if (result.length == 1) return reject({message: 'email already in use'});
                    resolve({ok: true});
                })
            })
        })
    },
    
    saveFromGithubLogin: function(chosenUserid, profile) {
        return new Promise((resolve, reject) => {        
            md.validateNotUsed(chosenUserid, profile.email).then(result=> {
                const newUser = new User({
                    userid: chosenUserid,
                    email: profile.email,
                    provider: 'github',
                    name: profile.name,
                    avatar_url: profile.avatar_url,
                    developer_url: profile.html_url,
                    created_at: new Date(),
                    updated_at: new Date()
                });
                newUser.save(function(err, doc) {
                    if (err) {
                        console.log('save user error', err);
                        return reject(err);
                    }
                    return resolve({ created: true, message: 'user created', doc: doc._doc });
                });
            }).catch(err=>reject(err));
        });
    }
}