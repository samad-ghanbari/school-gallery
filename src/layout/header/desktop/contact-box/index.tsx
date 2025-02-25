export interface ContactBoxProps {
  title: string;
  phone: string;
}

export function ContactBox({ title, phone }: ContactBoxProps) {
  return (
    <div className="contact-box hidden flex-none items-center gap-4 text-accent-900 dark:text-white xl:flex">
      <svg
        className="flex-none"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>{' '}
      <div>
        <p className="text-right text-gray-500">{title}</p>
        <a
          href={`tel:${phone.split(' ').join('')}`}
          className="block font-secondary text-sm font-bold leading-[1.3] text-sky-700"
        >
          {phone}
        </a>
      </div>
    </div>
  );
}
