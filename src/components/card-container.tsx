import Card from './card';
import { Photo } from '../types';

type CardContainerProps = {
  photos: Photo[];
};

export default function CardContainer(props: CardContainerProps) {
  const { photos } = props;

  return (
    <div className="is-flex is-justify-content-space-evenly is-flex-wrap-wrap">
      {
        photos.map((photo) => (
          <Card
            key={ photo.id }
            photo={ photo }
            image={ photo.urls.small }
            authorName={ photo.user.name }
            authorBio={ photo.user.bio }
          />
        ))
      }
    </div>
  );
}
