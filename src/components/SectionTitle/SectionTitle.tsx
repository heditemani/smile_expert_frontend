import styles from './SectionTitle.module.css';

export interface SectionTitleProps {
  title: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

export const SectionTitle = ({ title, description, buttonText, href }: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitleContainer}>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {buttonText && href && (
        <a href={href} className="btn btn-outline">
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default SectionTitle;