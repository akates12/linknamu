"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: LinkCardProps) {
  // sendBeacon은 새 탭으로 이동해도 요청이 끊기지 않는다
  const recordClick = () => {
    const endpoint = `/api/click/${encodeURIComponent(id)}`;
    if (!navigator.sendBeacon?.(endpoint)) {
      fetch(endpoint, { method: "POST", keepalive: true }).catch(() => {});
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-2xl border-2 border-gray-900 bg-white px-5 py-4 text-center font-semibold transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      {title}
    </a>
  );
}
