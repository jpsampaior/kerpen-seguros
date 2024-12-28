type InfoFieldProps = {
  label: string;
  value: string;
  capitalize?: boolean;
};

function InfoField({ label, value, capitalize }: InfoFieldProps) {
  return (
    <div className="flex items-start">
      <h3 className="w-28 font-medium text-gray-700">{label}:</h3>
      <p className={`${capitalize && "capitalize"} flex-1 text-gray-800`}>
        {value}
      </p>
    </div>
  );
}

export function DefaultEmail({
  name,
  phone,
  email,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  // Calcular data e hora no servidor ou antes de passar os dados para o componente
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateTime = `${formattedDate} às ${formattedTime}`;

  return (
    <main className="bg-gray-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <section className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Formulário de contato Kerpen Seguros
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Email enviado automaticamente por meio do formulário de contato no
          site{" "}
          <span className="font-medium text-primary">kerpenseguros.com.br</span>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">
          Informações do Cliente
        </h2>
        <div className="space-y-4">
          <InfoField label="Nome" value={name} capitalize={true} />
          <InfoField label="Telefone" value={phone} />
          <InfoField label="Email" value={email} />
          <InfoField label="Data e Hora" value={dateTime} />
          <InfoField label="Mensagem" value={message} />
        </div>
      </section>
    </main>
  );
}
