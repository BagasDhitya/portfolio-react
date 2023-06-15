const Whatsapp = () => {
  const whatsappIcon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}
        target="_blank"
      >
        <img width={70} height={70} src={whatsappIcon} />
      </a>
    </div>
  );
};

export default Whatsapp;
