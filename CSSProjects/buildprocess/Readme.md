# How to setup a build process for your CSS project


##    1. Compile css to sass
```sh
node-sass main.scss style.compiled.css
```

##    2. Concat CSS files to merge all css files

```bash
concat -o style.concat.css ./style.compiled.css ./fontawesome/all.css
```      
   After concating the below line can be commented in html
     <link rel="stylesheet" href="./fontawesome/all.css" >


##    2. Concat CSS files to merge all css files

```bash
postcss --use autoprefixer -b \"last 10 versions\" ./style.concat.css -o ./style.prefix.css
```

##    3. Auto prefix

```bash
postcss --use autoprefixer -b \"last 10 versions\" ./style.concat.css -o ./style.prefix.css
```

##   4.  Compress

```bash
node-sass ./style.prefix.css style.css --output-style compressed
```

Note : www.caniuse.com