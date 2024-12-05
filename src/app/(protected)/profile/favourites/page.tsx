import { CustomerFavorite } from 'services/customerFavorite/customerFavorite.service';
import { getUserDataServerSide } from 'utils/getSessionData';
import Favorites from 'views/protectedViews/Favorite';

const FavoritesPage = async () => {
  const session = await getUserDataServerSide();
  const payload = {
    page: 1,
    offset: 0,
    limit: 18
  };
  const getModel = await CustomerFavorite.getCustomerFavorite(session.token, payload);

  return (
    <>
      <Favorites favModel={getModel} filterPayload={payload} />
    </>
  );
};

export default FavoritesPage;
