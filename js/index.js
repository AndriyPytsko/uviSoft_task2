"use strict"
const info = [
   {
      'added' : '21.04.2020',
      'years' : '23',
      'wedding' : 'одружений',
      'work' : 'касир сільпо',
      'study' : 'КНУ Шевченка'
   },
   {
      'added' : '23.8.2000',
      'years' : '34',
      'wedding' : 'не одружений',
      'work' : 'лікар',
      'study' : 'КПІ'
   },
   {
      'added' : '01.10.1999',
      'years' : '29',
      'wedding' : 'одружений',
      'work' : 'вчитель',
      'study' : 'КНЕУ'
   }
];

const table = $('#table').html();

$(document).on('click', '#firstRow', function(){
   $('#table')
       .html(`
        <tbody>
           <tr>
               <td class="new-row active" data-order="1">
                    Смородина Алена Александровна
                    <div class="new-row__description">
                        <p class="new-row__email">
                            alenasmorodina@gmail.com
                        </p>
                        <p class="new-row__phone">
                            0987658923
                        </p>
                    </div>
               </td>
               <td rowspan="3" id="detail" class="detail">
                    <p class="detail__text">Добавлен: ${ info[0].added }</p>
                    <p class="detail__text">Возраст: ${ info[0].years }</p>
                    <p class="detail__text">Семейное положение: ${ info[0].wedding }</p>
                    <p class="detail__text">Работает: ${ info[0].work }</p>
                    <p class="detail__text">Образование: ${ info[0].study }</p>
                    <div class="detail__close" id="close">x</div>
               </td> 
           </tr>
           <tr>
               <td class="new-row" data-order="2">
                    Миланов Алексей Игоревич
                    <div class="new-row__description">
                        <p class="new-row__email">
                            milanovalex@ua.fm
                        </p>
                        <p class="new-row__phone">
                            0506123123
                        </p>
                    </div>
               </td>
           </tr>
           <tr>
               <td class="new-row" data-order="3">
                    Зайченко Валентина Александровна
                    <div class="new-row__description">
                        <p class="new-row__email">
                            zay4enkovalya@mail.ru
                        </p>
                        <p class="new-row__phone">
                            0966671290
                        </p>
                    </div>
               </td>
           </tr>
        </tbody>
   `);
});
$(document).on('click', '#secondRow', function(){
   $('#table')
       .html(`
        <tbody>
           <tr>
               <td class="new-row" data-order="1">
                    Смородина Алена Александровна
                    <div class="new-row__description">
                        <p class="new-row__email">
                            alenasmorodina@gmail.com
                        </p>
                        <p class="new-row__phone">
                            0987658923
                        </p>
                    </div>
               </td>
               <td rowspan="3" id="detail" class="detail">
                    <p class="detail__text">Добавлен: ${ info[1].added }</p>
                    <p class="detail__text">Возраст: ${ info[1].years }</p>
                    <p class="detail__text">Семейное положение: ${ info[1].wedding }</p>
                    <p class="detail__text">Работает: ${ info[1].work }</p>
                    <p class="detail__text">Образование: ${ info[1].study }</p>
                    <div class="detail__close" id="close">x</div>
               </td> 
           </tr>
           <tr>
               <td class="new-row active" data-order="2">
                    Миланов Алексей Игоревич
                    <div class="new-row__description">
                        <p class="new-row__email">
                            milanovalex@ua.fm
                        </p>
                        <p class="new-row__phone">
                            0506123123
                        </p>
                    </div>
               </td>
           </tr>
           <tr>
               <td class="new-row" data-order="3">
                    Зайченко Валентина Александровна
                    <div class="new-row__description">
                        <p class="new-row__email">
                            zay4enkovalya@mail.ru
                        </p>
                        <p class="new-row__phone">
                            0966671290
                        </p>
                    </div>
               </td>
           </tr>
        </tbody>
   `);
});
$(document).on('click', '#thirdRow', function(){
   $('#table')
       .html(`
        <tbody>
           <tr>
               <td class="new-row" data-order="1">
                    Смородина Алена Александровна
                    <div class="new-row__description">
                        <p class="new-row__email">
                            alenasmorodina@gmail.com
                        </p>
                        <p class="new-row__phone">
                            0987658923
                        </p>
                    </div>
               </td>
               <td rowspan="3" id="detail" class="detail">
                    <p class="detail__text">Добавлен: ${ info[2].added }</p>
                    <p class="detail__text">Возраст: ${ info[2].years }</p>
                    <p class="detail__text">Семейное положение: ${ info[2].wedding }</p>
                    <p class="detail__text">Работает: ${ info[2].work }</p>
                    <p class="detail__text">Образование: ${ info[2].study }</p>
                    <div class="detail__close" id="close">x</div>
                </td> 
           </tr>
           <tr>
               <td class="new-row" data-order="2">
                    Миланов Алексей Игоревич
                    <div class="new-row__description">
                        <p class="new-row__email">
                            milanovalex@ua.fm
                        </p>
                        <p class="new-row__phone">
                            0506123123
                        </p>
                    </div>
               </td>
           </tr>
           <tr>
               <td class="new-row active" data-order="3">
                    Зайченко Валентина Александровна
                    <div class="new-row__description">
                        <p class="new-row__email">
                            zay4enkovalya@mail.ru
                        </p>
                        <p class="new-row__phone">
                            0966671290
                        </p>
                    </div>
               </td>
           </tr>
        </tbody>
   `);
});

$(document).on('click','#close', function () {
   $('#table').html(table);
})

$(document).on('click', '.new-row', function (e) {
   let td = e.target.closest('td');
   if (!td) return;
   $('.active')[0].classList.remove('active');
   td.classList.add('active')
   $('#detail').html(`
                    <p class="detail__text">Добавлен: ${ info[td.dataset.order-1].added }</p>
                    <p class="detail__text">Возраст: ${ info[td.dataset.order-1].years }</p>
                    <p class="detail__text">Семейное положение: ${ info[td.dataset.order-1].wedding }</p>
                    <p class="detail__text">Работает: ${ info[td.dataset.order-1].work }</p>
                    <p class="detail__text">Образование: ${ info[td.dataset.order-1].study }</p>
                    <div class="detail__close" id="close">x</div>
   `)
})
