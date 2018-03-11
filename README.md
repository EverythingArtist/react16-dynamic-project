# react16-dynamic-project
new react 16 with new es6 syntax

New css tweak: To make css file scope only to a specific js file. Run a command npm run eject. Then go to webpack.confic.dev and webpack.dev.prod file in config folder. And underneath module in test with css - looks like ("test:/\.css$/") after importloaders 1; add modules: true and localIdentName: '[name]__[local]__[hash:base64:5]' . Put this is both files and after this you can locally scope css objects. import classes from './App.css' and then in div, do this <div className={classes.property}> to get property.
