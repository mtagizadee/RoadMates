import { ReactNode } from 'react';

export default function List<T>(props: Props<T>) {
    return (
        <div className={ props.className }>
            { props.items.map(props.renderItem) }
        </div>
    );
};

type Props<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
    className?: string;
}