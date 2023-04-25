import { ColorRing } from 'react-loader-spinner';

export function Loader({ size = 20 }) {
  return (
    <ColorRing
      visible={true}
      height={size}
      width={size}
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
}
