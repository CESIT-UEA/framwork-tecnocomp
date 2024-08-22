export interface comentario{
  id_comentario:number,
  id_topico_forum:number,
  id_autor:number,
  conteudo:string,
  data_comentario:Date,
  curtidas:number,
  fixado:boolean
}
