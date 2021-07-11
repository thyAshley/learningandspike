import Image from "next/image";
import Link from "next/link";

import classes from "src/styles/events/eventList.module.scss";

export interface EventItemProps {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
}

export interface EventProps {
  items: EventItemProps[];
}

const EventList = ({ items }: EventProps): JSX.Element => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        >
          {item.id}
        </ListItem>
      ))}
    </div>
  );
};

export default EventList;

export const ListItem = ({ ...props }): JSX.Element => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US");

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <Image
        src="https://picsum.photos/200/300"
        width="200"
        height="200"
        alt={image}
      />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore</Link>
        </div>
      </div>
    </li>
  );
};
