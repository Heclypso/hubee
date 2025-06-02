export type Servico = {
    title: string
    images: Array<string>
    tags: Array<string>
    price: number
    installment: string
}

export type DadosDaAPi = {
    moveisUsados:  Servico[]
    consertoDeRoupas: Servico[]
    confeitaria: Servico[]
    outrosServicos: Servico[]
}