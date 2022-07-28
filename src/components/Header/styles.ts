export const PaperPropsStyle = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    background:
      'linear-gradient(0deg, rgba(46, 93, 168, 0.11), rgba(46, 93, 168, 0.11)), #FDFBFF',
    boxShadow:
      '0px 8px 12px 6px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.1)',
    mt: '10px',
    borderRadius: '24px',
    width: '360px',
    '& .MuiList-root': {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      padding: '16px',
    },
    '& .MuiMenuItem-root': {
      height: '48px',
      borderRadius: '24px',
      gap: '16px',
      '&:hover': {
        background: 'rgba(68, 71, 79, 0.08)',
      },
    },
  },
};
