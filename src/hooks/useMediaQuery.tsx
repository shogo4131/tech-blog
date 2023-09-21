import { useMedia } from 'use-media';

export const useMediaQuery = () => {
  const lg = useMedia({ maxWidth: '1380px' });
  const xl = useMedia({ maxWidth: '1040px' });
  const sm = useMedia({ maxWidth: '540px' });

  return { xl, lg, sm };
};
