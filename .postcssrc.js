// ESM 에크마스크립트 모듈 > 임폴트 익스폴트
// 노드에서는 CommonJS를 지원한다
// ㄴ require()함수로 가져온다
// ㄴ module.exports 로 내보낸다



module.exports = {
  plugins: [
    require('./node_modules/autoprefixer/lib/prefixer.js')
  ]
}