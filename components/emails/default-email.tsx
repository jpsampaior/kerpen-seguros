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
  return (
    <main>
      <section>
        <h1>Default Email</h1>
        <p>Default Email</p>
      </section>
      <section>
        <div>
          <h2>Name:</h2>
          <p>{name}</p>
        </div>
        <div>
          <h2>Phone:</h2>
          <p>{phone}</p>
        </div>
        <div>
          <h2>Email:</h2>
          <p>{email}</p>
        </div>
        <div>
          <h2>Message:</h2>
          <p>{message}</p>
        </div>
      </section>
    </main>
  );
}
