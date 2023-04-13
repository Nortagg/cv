const ContactItem = ({ name, text, icon, link }) => {
  return (
    <div className={`${name}-wrapper contact-item-wrapper`}>
      <a target="_blank" href={link} className={`${name}-link`}>
        <div className={`icon ${name}-icon`}>{icon}</div>
        <div className={`text ${name}-text`}>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};
export default ContactItem;
