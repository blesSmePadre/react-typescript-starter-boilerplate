import { useRef, useCallback } from 'react';

export default (initialValue: any) => {
  const variable = useRef(initialValue);

  const set = useCallback(value => {
    variable.current = value;
    return value;
  }, []);

  return [variable.current, set];
};
