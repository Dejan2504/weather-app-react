import classes from './LoadingSpinner.module.css';

function LoadingSpinner(){

    return(<div className={classes.spinner}>
        <div className={classes.ticks}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
    </div>);
}

export default LoadingSpinner;