import './desigin.css'
import man from './img/sticker2.png'
import time from './img/time.svg'
import cal from './img/cal.svg'
import many from './img/many.svg'
import Line from "./Line";
import PageProofs from "./PageProofs";

function Design() {
    let tableData = [
        {
            TypesOfJobs: 'Дизайн главной страницы',
            Hours: '16',
            WorkingDays: '4',
            Price: '24 000'
        },
        {
            TypesOfJobs: 'Страница займ под недвижимость',
            Hours: '8',
            WorkingDays: '2',
            Price: '12 000'
        },
        {
            TypesOfJobs: 'Страница займ под авто',
            Hours: '6',
            WorkingDays: '2',
            Price: '9 000'
        },
        {
            TypesOfJobs: 'Страница по выкупу ипотеки',
            Hours: '6',
            WorkingDays: '2',
            Price: '9 000'
        },
        {
            TypesOfJobs: 'Внутренние страницы услуги',
            Hours: '4',
            WorkingDays: '1',
            Price: '6 000'
        },
    ]
    console.log(tableData)





    return (
        <>
            <div className="Design">
                <header className="header header__design">
                    <div className="container">
                        <div className="wrapper wrapper__design">
                            <div className="wrapper__title">
                                <p className="sub-title Design__sub-title">Этап 1</p>
                                <h1 className="title Design__title">Дизайн</h1>
                            </div>
                            <div className="Design__count-wrapper">
                                <div className="Design__count">
                                    <p className="sub-title count-name">Часов</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={time} alt="time img"/>
                                        <p className="count-sum">51</p>
                                    </div>
                                </div>

                                <div className="Design__count">
                                    <p className="sub-title count-name">Дней</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={cal} alt="cal img"/>
                                        <p className="count-sum">15</p>
                                    </div>
                                </div>

                                <div className="Design__count">
                                    <p className="sub-title count-name">Сумма</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={many} alt="many img"/>
                                        <p className="count-sum">76 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/*header__content*/}
                <div className="content design-block">
                    <div className="container content__container">
                        <div className="wrapper__content">
                            <div className="wrapper__table">
                                <div className="grid__table">
                                    <ul className="table-column">
                                        <li className="table__column-title">Виды работ</li>
                                        <li className="table__column-title center">Часов</li>
                                        <li className="table__column-title center">Рабочих дней</li>
                                        <li className="table__column-title title-end">Стоимость</li>
                                    </ul>


                                </div>
                            </div>
                            <div className="wrapper__notes">
                                <div className="notes__content">
                                    <p className="notes__title">Важно</p>
                                    <p className="notes__text">Этап согласования не учитывается в срок работ.</p>
                                    <p className="notes__text">В ваших интересах оперативнее с нами работать чтобы
                                        получить
                                        готовый продукт.</p>
                                    <img className="notes__img" src={man} alt="image man"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Page-proofs*/}
            <div className="Page-proofs">
                <header className="header header__design">
                    <div className="container">
                        <div className="wrapper wrapper__design">
                            <div className="wrapper__title">
                                <p className="sub-title Design__sub-title">Этап 2</p>
                                <h1 className="title Design__title">Вёрстка</h1>
                            </div>
                            <div className="Design__count-wrapper">
                                <div className="Design__count">
                                    <p className="sub-title count-name">Часов</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={time} alt="time img"/>
                                        <p className="count-sum">62</p>
                                    </div>
                                </div>

                                <div className="Design__count">
                                    <p className="sub-title count-name">Дней</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={cal} alt="cal img"/>
                                        <p className="count-sum">14</p>
                                    </div>
                                </div>

                                <div className="Design__count">
                                    <p className="sub-title count-name">Сумма</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={many} alt="many img"/>
                                        <p className="count-sum">93 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="content design-block">
                    <div className="container content__container">
                        <div className="wrapper__content">
                            <div className="wrapper__table">
                                <div className="grid__table">
                                    <ul className="table-column">
                                        <li className="table__column-title">Виды работ</li>
                                        <li className="table__column-title center">Часов</li>
                                        <li className="table__column-title center">Рабочих дней</li>
                                        <li className="table__column-title title-end">Стоимость</li>
                                    </ul>
                                    {
                                        tableData.map((x)=>{
                                            return <PageProofs/>
                                        })
                                    }

                                </div>
                            </div>
                            <div className="wrapper__notes">
                                <div className="notes__content">
                                    <p className="notes__title">Важно</p>
                                    <p className="notes__text">На этапе вёрстки правки в дизайн принимаются за
                                        дополнительную плату.
                                        Все правки принимаются на этапе дизайна.</p>
                                    <img className="notes__img" src={man} alt="image man"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Programming*/}
            <div className="Programming">
                <header className="header header__design">
                    <div className="container">
                        <div className="wrapper wrapper__design">
                            <div className="wrapper__title">
                                <p className="sub-title Design__sub-title">Этап 3</p>
                                <h1 className="title Design__title">Программирование</h1>
                            </div>
                            <div className="Design__count-wrapper">
                                <div className="Design__count">
                                    <p className="sub-title count-name">Часов</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={time} alt="time img"/>
                                        <p className="count-sum">27</p>
                                    </div>
                                </div>

                                <div className="Design__count">
                                    <p className="sub-title count-name">Дней</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={cal} alt="cal img"/>
                                        <p className="count-sum">10</p>
                                    </div>
                                </div>

                                <div className="Design__count">
                                    <p className="sub-title count-name">Сумма</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={many} alt="many img"/>
                                        <p className="count-sum">55 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="content design-block">
                    <div className="container content__container">
                        <div className="wrapper__content">
                            <div className="wrapper__table">
                                <div className="grid__table">
                                    <ul className="table-column">
                                        <li className="table__column-title">Виды работ</li>
                                        <li className="table__column-title center">Часов</li>
                                        <li className="table__column-title center">Рабочих дней</li>
                                        <li className="table__column-title title-end">Стоимость</li>
                                    </ul>

                                    <ul className="table-column">
                                        <li className="table__column-text">Дизайн главной страницы</li>
                                        <li className="table__column-text center">16</li>
                                        <li className="table__column-text center">4</li>
                                        <li className="table__column-text end">24 000 ₽</li>
                                    </ul>

                                    <ul className="table-column">
                                        <li className="table__column-text">Дизайн главной страницы</li>
                                        <li className="table__column-text center">16</li>
                                        <li className="table__column-text center">4</li>
                                        <li className="table__column-text end">24 000 ₽</li>
                                    </ul>

                                    <ul className="table-column">
                                        <li className="table__column-text">Дизайн главной страницы</li>
                                        <li className="table__column-text center">16</li>
                                        <li className="table__column-text center">4</li>
                                        <li className="table__column-text end">24 000 ₽</li>
                                    </ul>

                                    <ul className="table-column">
                                        <li className="table__column-text">Дизайн главной страницы</li>
                                        <li className="table__column-text center">16</li>
                                        <li className="table__column-text center">4</li>
                                        <li className="table__column-text end">24 000 ₽</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="wrapper__notes">
                                <div className="notes__content">
                                    <p className="notes__title">Важно</p>
                                    <p className="notes__text">На этапе вёрстки правки в дизайн принимаются за
                                        дополнительную плату.
                                        Все правки принимаются на этапе дизайна.</p>
                                    <img className="notes__img" src={man} alt="image man"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*total*/}
            <div className="total">
                <header className="header ">
                    <div className="container">
                        <div className="wrapper wrapper__design">
                            <div className="wrapper__title">
                                <p className="sub-title Design__sub-title">Итого</p>
                                <h1 className="title Design__title">Общая стоимость работ</h1>
                            </div>
                            <div className="Design__count-wrapper">
                                <div className="Design__count">
                                    <p className="sub-title count-name">Часов</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={time} alt="time img"/>
                                        <p className="count-sum">150</p>
                                    </div>
                                </div>

                                <div className="Design__count">
                                    <p className="sub-title count-name">Дней</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={cal} alt="cal img"/>
                                        <p className="count-sum">39</p>
                                    </div>
                                </div>

                                <div className="Design__count">
                                    <p className="sub-title count-name">Сумма</p>
                                    <div className="wrapper__count">
                                        <img className="count__img" src={many} alt="many img"/>
                                        <p className="count-sum">225 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="content design-block">
                    <div className="container content__container">
                        <div className="wrapper__content wrapper__content-total">
                            <div className="wrapper__table">
                                <div className="grid__table">
                                    <ul className="table-column">
                                        <li className="table__column-title">Этап</li>
                                        <li className="table__column-title center">Часов</li>
                                        <li className="table__column-title center">Рабочих дней</li>
                                        <li className="table__column-title title-end">Стоимость</li>
                                    </ul>

                                    <ul className="table-column">
                                        <li className="table__column-text">Дизайн</li>
                                        <li className="table__column-text center">51</li>
                                        <li className="table__column-text center">13</li>
                                        <li className="table__column-text end">27 000 ₽</li>
                                    </ul>

                                    <ul className="table-column">
                                        <li className="table__column-text">Вёрстка</li>
                                        <li className="table__column-text center">16</li>
                                        <li className="table__column-text center">4</li>
                                        <li className="table__column-text end">18 000 ₽</li>
                                    </ul>

                                    <ul className="table-column">
                                        <li className="table__column-text">Программирование</li>
                                        <li className="table__column-text center">3</li>
                                        <li className="table__column-text center">1</li>
                                        <li className="table__column-text end">18 000 ₽</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Design;
