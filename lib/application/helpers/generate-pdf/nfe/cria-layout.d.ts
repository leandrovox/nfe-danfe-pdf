import type { GeneratePdf } from '../../../../types';
export declare function criaLayout({ pathLogo, nf, ajusteX, ajusteY, doc, margemEsquerda, margemTopo, larguraDoFormulario, margemDireita, folha, cancelada, textoRodape, emailEmitente, celularEmitente }: GeneratePdf.InputCriaLayout): Promise<void>;
