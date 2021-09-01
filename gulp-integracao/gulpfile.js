const { series, parallel, src, dest } = require('gulp');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream'); // junta tudo em um arquivo só
const tsify = require('tsify'); // converte TS para JS
const uglify = require('gulp-uglify'); // minifica arquivo
const rename = require('gulp-rename'); // renomeia arquivo

function limparDist() {
  // cb() // sinaliza que a tarefa terminou, esse cb entra como parametro da função
  return del(['dist']) // deleta o folder criado de nome dist
}

function copiarHTML() {
  return src('public/**/*')
  .pipe(dest('dist'))
}

function gerarJS() {
  return browserify({
    basedir: '.',
    entries: ['src/main.ts']
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(dest('dist'))
}

function gerarJSProducao() {
  return src('dist/app.js')
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'))
}

// inicia as tarefas
exports.default = series(
  limparDist,
  parallel(gerarJS, copiarHTML),
  gerarJSProducao
)