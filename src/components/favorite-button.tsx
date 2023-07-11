type FavoriteButtonProps = {
  isFavorite: boolean;
  onFavorite: () => void;
};

export default function FavoriteButton(props: FavoriteButtonProps) {
  const { isFavorite, onFavorite } = props;
  return (
    <button
      className="button is-white"
      onClick={ onFavorite }
    >
      <figure
        className="image is-40x40"
        style={ {
          color: isFavorite ? 'yellow' : undefined,
          fontSize: '40px',
        } }
      >
        <i className={ `${isFavorite ? 'fas' : 'fa'} fa-star` } />
      </figure>
    </button>
  );
}
