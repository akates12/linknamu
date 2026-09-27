type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={`${name} 프로필 사진`}
        className="h-36 w-36 rounded-full border-2 border-gray-900 object-cover dark:border-gray-100"
      />
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{bio}</p>
    </section>
  );
}
