/**
 * Created by vamsi_oxxn9e on 03-11-2016.
 */
module.exports =function(app) {
    app.get('*', function(req, res) {
        res.sendfile('index.html'); // load our public/index.html file
    });
}