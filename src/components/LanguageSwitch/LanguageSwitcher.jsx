const LanguageSwitcher = () => {
  const translateToJapanese = () => {
    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
      googleCombo.value = 'ja';
      googleCombo.dispatchEvent(new Event('change'));
    }
  };

  return (
    <button 
      onClick={translateToJapanese}
      style={{
        padding: '8px 16px',
        borderRadius: '20px',
        border: '1px solid #333',
        background: '#fff',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      日本語 (JP)
    </button>
  );
};