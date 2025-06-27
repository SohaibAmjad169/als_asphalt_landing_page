interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
  centered,
  light,
}: SectionTitleProps) => {
  const effectiveAlign = centered ? 'center' : align;
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  const textColorClass = light ? 'text-white' : 'text-gray-900';

  return (
    <div className={`max-w-3xl ${alignmentClasses[effectiveAlign]} mb-12 ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className={`text-sm md:text-base font-medium uppercase tracking-wide ${light ? 'text-white/80' : ''}`}>
            {subtitle}
          </span>
        </div>
      )}
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-comfortaa font-bold mb-3 ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      
      {description && (
        <p className={`${light ? 'text-white/80' : textColorClass} text-base md:text-lg mt-4`}>{description}</p>
      )}
    </div>
  );
};

export default SectionTitle; 