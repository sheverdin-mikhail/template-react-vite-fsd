import clsx from 'clsx';
import cls from './ExamplePage.module.scss';

export interface ExamplePageProps {
    className?: string
}

const ExamplePage = (props: ExamplePageProps) => {
    const { className } = props;
    
    return (
        <div className={clsx(cls.ExamplePage, {}, [className])}>
            ExamplePage
        </div>
    )
}

export default ExamplePage