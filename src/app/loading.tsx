import LoadingScreen from './components/LoadingScreen';

export default function Loading() {
  return (
    <LoadingScreen 
      text="Initializing Application..." 
      withSpinner={true}
    />
  );
}