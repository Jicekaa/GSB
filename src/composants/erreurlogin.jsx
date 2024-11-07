import React, { useState, useEffect } from 'react';

function ErreurLogin({ isError }) {
  const [erreurlogin, setErreurLogin] = useState(isError);

  useEffect(() => {
    setErreurLogin(isError);
  }, [isError]);

  return erreurlogin ? (
    <p className="text-red-600">Erreur de connexion</p>
  ) : null;
}

export default ErreurLogin;