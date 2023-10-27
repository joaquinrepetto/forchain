export const handleRedirect = (navigate, url) => {
  if (url && navigate) {
    navigate(url);
  }
};
