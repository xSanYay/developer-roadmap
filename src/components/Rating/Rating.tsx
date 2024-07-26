import { useState } from 'react';
import { cn } from '../../lib/classname';

type RatingProps = {
  rating?: number;
  onRatingChange?: (rating: number) => void;
  starSize?: number;
  readOnly?: boolean;
  className?: string;
};

export function Rating(props: RatingProps) {
  const {
    rating = 0,
    starSize,
    readOnly = false,
    className,
    onRatingChange,
  } = props;

  const [stars, setStars] = useState(Number(rating.toFixed(2)));
  const starCount = Math.floor(stars);
  const decimalWidthPercentage = Math.min((stars - starCount) * 100, 100);

  return (
    <div className={cn('flex', className)}>
      {[1, 2, 3, 4, 5].map((counter) => {
        const isActive = counter <= starCount;
        const hasDecimal = starCount + 1 === counter;

        return (
          <RatingStar
            key={`start-${counter}`}
            starSize={starSize}
            widthPercentage={
              isActive ? 100 : hasDecimal ? decimalWidthPercentage : 0
            }
            onClick={() => {
              setStars(counter);
              onRatingChange?.(counter);
            }}
            readOnly={readOnly}
          />
        );
      })}
    </div>
  );
}

type RatingStarProps = {
  starSize?: number;
  onClick: () => void;
  widthPercentage?: number;
  readOnly: boolean;
};

function RatingStar(props: RatingStarProps) {
  const { onClick, widthPercentage = 100, starSize = 20, readOnly } = props;

  return (
    <button
      onClick={onClick}
      className="relative block cursor-pointer text-gray-300 disabled:cursor-default"
      style={{
        width: `${starSize}px`,
        height: `${starSize}px`,
      }}
      disabled={readOnly}
      type="button"
    >
      <span className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-none"
          style={{
            width: `${starSize}px`,
            height: `${starSize}px`,
          }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span
          className="absolute inset-0 overflow-hidden"
          style={{
            width: `${widthPercentage}%`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-yellow-400 stroke-yellow-400"
            style={{
              width: `${starSize}px`,
              height: `${starSize}px`,
            }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </span>
      </span>
    </button>
  );
}
