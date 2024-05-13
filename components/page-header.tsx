interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageHeader({
  className,
  children,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto ${className || ""}`}>
      <div className="text-center">
        <div className="relative flex items-center justify-center gap-4 mb-5 before:h-px before:w-24 before:border-b before:[border-image:linear-gradient(to_left,theme(colors.indigo.300),transparent)1] dark:before:[border-image:linear-gradient(to_left,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-24 after:border-b after:[border-image:linear-gradient(to_right,theme(colors.indigo.300),transparent)1] dark:after:[border-image:linear-gradient(to_right,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none">
          <div className="relative text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 inline-flex rounded-lg whitespace-nowrap px-3 py-[3px] tracking-normal before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,theme(colors.indigo.400/.12)_33%,theme(colors.pink.400/.12)_66%,theme(colors.amber.200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,theme(colors.indigo.400/.16),theme(colors.indigo.600/.16)_50%,transparent_100%)] shadow">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 bg-indigo-500/15 dark:bg-gray-800/65 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)]"
              aria-hidden="true"
            />
           
          </div>
        </div>
        <div className="space-y-5">
          <h1  className="text-5xl text-gray-800 dark:text-gray-400">
              Launching <span className="font-bold text-[#567ce0]">
                  Jumm.ai
              </span>
          </h1>
          <p className="text-gray-800 dark:text-gray-400 text-3xl pt-3">in</p>
          <p className="font-inter-tight text-5xl md:text-[85px] font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 py-4">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
