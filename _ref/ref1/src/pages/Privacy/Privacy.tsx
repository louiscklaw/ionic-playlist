import { IonImg, IonPage } from "@ionic/react";

const Privacy: React.FC = () => {
  return (
    <IonPage>
        <IonImg
        src="./assets/logo.png"
        className="imgLogoSmall flex items-center mx-auto"
      />
      <div className="container px-8 py-3 font-semibold overflow-y-auto">
        <h2 className="font-bold text-center text-xl">
          Política de Privacidade
        </h2>
        <p className="my-2">
          Na Virtumed, privacidade e segurança são
          prioridades e nos comprometemos com a transparência do tratamento de
          dados pessoais dos nossos usuários/clientes. Por isso, esta presente
          Política de Privacidade estabelece como é feita a coleta, uso e
          transferência de informações de clientes ou outras pessoas que acessam
          ou usam nosso site. Ao utilizar nossos serviços, você entende que
          coletaremos e usaremos suas informações pessoais nas formas descritas
          nesta Política, sob as normas da Constituição Federal de 1988 (art.
          5º, LXXIX; e o art. 22º, XXX – incluídos pela EC 115/2022), das normas
          de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições
          consumeristas da Lei Federal 8078/1990 e as demais normas do
          ordenamento jurídico brasileiro aplicáveis. Dessa forma, a (nome
          empresarial), doravante denominada simplesmente como “(nome
          empresarial simplificado)”, inscrita no CNPJ/MF sob o nº (nº do CNPJ),
          no papel de Controladora de Dados, obriga-se ao disposto na presente
          Política de Privacidade.
        </p>
        <h2 className="font-bold">
          1. Quais dados coletamos sobre você e para qual finalidade?
        </h2>
        <p className="my-2">
          Nosso aplicativo coleta e utiliza alguns dados pessoais seus, de forma
          a viabilizar a prestação de serviços e aprimorar a experiência de uso.
        </p>
        <h2 className="font-bold">2. Consentimento</h2>
        <p className="my-2">
          É a partir do seu consentimento que tratamos os seus dados pessoais. O
          consentimento é a manifestação livre, informada e inequívoca pela qual
          você autoriza a Virtumed a tratar seus dados.
          Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados
          só serão coletados, tratados e armazenados mediante prévio e expresso
          consentimento.  O seu consentimento será obtido de forma específica
          para cada finalidade acima descrita, evidenciando o compromisso de
          transparência e boa-fé da Virtumed para com
          seus usuários/clientes, seguindo as regulações legislativas
          pertinentes. Ao utilizar os serviços da (nome empresarial
          simplificado) e fornecer seus dados pessoais, você está ciente e
          consentindo com as disposições desta Política de Privacidade, além de
          conhecer seus direitos e como exercê-los. A qualquer tempo e sem
          nenhum custo, você poderá revogar seu consentimento. É importante
          destacar que a revogação do consentimento para o tratamento dos dados
          pode implicar a impossibilidade da performance adequada de alguma
          funcionalidade do site que dependa da operação. Tais consequências
          serão informadas previamente.
        </p>
        <h2 className="font-bold">3. Quais são os seus direitos?</h2>
        <p className="mt-2 mb-48">
          A Virtumed assegura a seus usuários/clientes
          seus direitos de titular previstos no artigo 18 da Lei Geral de
          Proteção de Dados. Dessa forma, você pode, de maneira gratuita e a
          qualquer tempo: Confirmar a existência de tratamento de dados, de
          maneira simplificada ou em formato claro e completo. Acessar seus
          dados, podendo solicitá-los em uma cópia legível sob forma impressa ou
          por meio eletrônico, seguro e idôneo. Corrigir seus dados, ao
          solicitar a edição, correção ou atualização destes. Limitar seus dados
          quando desnecessários, excessivos ou tratados em desconformidade com a
          legislação através da anonimização, bloqueio ou eliminação. Solicitar
          a portabilidade de seus dados, através de um relatório de dados
          cadastrais que a Virtumed trata a seu respeito.
          Eliminar seus dados tratados a partir de seu consentimento, exceto nos
          casos previstos em lei. Revogar seu consentimento, desautorizando o
          tratamento de seus dados. Informar-se sobre a possibilidade de não
          fornecer seu consentimento e sobre as consequências da negativa.
        </p>
      </div>
    </IonPage>
  );
};

export default Privacy;
