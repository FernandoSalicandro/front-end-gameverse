
import './DetailsPage.css';
import Section from '../../Components/Sections/Section';
import TopDetails from '../../Components/Sections/TopDetails';
import BottomDetails from '../../Components/Sections/BottomDetails';
import useDetailsFetch from '../../Utils/Hooks/useDetailsFetch';


const DetailsPage = () => {

  const { game, loading } = useDetailsFetch();

  return (

    <>
      <Section>

          <TopDetails game={game} />
          <BottomDetails game={game}/>

      </Section>

    </>

  )
}

export default DetailsPage