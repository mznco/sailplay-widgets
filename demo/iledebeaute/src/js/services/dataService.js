(function (angular, sp) {

  angular.module('iledebeaute.services.data', [])

    .service('dataService', function () {

      var self = this;

      self.menu = [
        {
          label: 'О программе',
          key: 'about',
          // DEFAULT ACTIVE ELEMENT
          active: true
        },
        {
          label: 'Условия участия',
          key: 'rules',
          items: [
            {
              label: 'Правила начисления бонусов',
              key: 'rules'
            },
            {
              label: 'Правила списания бонусов',
              key: 'cut_bonus_rules'
            },
            {
              label: 'Полезная информация',
              key: 'info'
            }
          ]
        },
        {
          label: 'История начислений',
          key: 'history',
          items: [
            {
              label: 'История начислений',
              key: 'history'
            },
            {
              label: 'Получи больше бонусов',
              key: 'actions'
            }
          ]
        },
        {
          label: 'Сокровищница привилегий',
          key: 'gifts',
          items: [
            {
              label: 'Сокровищница привилегий',
              key: 'gifts'
            },
            {
              label: 'Архив привилегий',
              hide: true,
              key: 'gifts_archive'
            }
          ]
        },
        {
          label: 'Вопрос-ответ',
          key: 'faq',
          items: [
            {
              label: 'Часто задаваемые вопросы',
              key: 'faq'
            },
            {
              label: 'Форма обратной связи',
              hide: true,
              key: 'feedback'
            }
          ]
        }
      ];

      self.pages = {
        cut_bonus_rules: {
          title: 'Правила списания бонусов',
          text: 'Бонусы могут быть списаны на любые привилегии из списка в блоке “Привилегии”. Обратите внимание - количество некоторых, особенно ценных, привилегий очень ограничено, поэтому их необходимо бронировать заранее. Накопив достаточно бонусов на получение привилегии, выберите её в соответствующем разделе и получите электронное письмо с сертификатом на эту привилегию. Для вашего удобства, при необходимости - вы можете связаться с менеджером и договориться об индивидуальном процессе получения привилегии.'
        },
        rules: {
          title: 'Правила начисления бонусов',
          text: 'Совершайте покупки в розничных салонах и интернет-магазине Иль де Ботэ и получайте бонусы в зависимости от состава покупки. \n\nБонусы могут быть списаны на любые привилегии из списка в блоке “Привилегии”. Обратите внимание - количество некоторых,\n\nПолучите 1 бонус за каждую 1000 рублей в чеке, но за некоторые товары бонусы могут начисляться с повышенным коэффициентом.\n\nособенно ценных, привилегий очень ограничено, поэтому их необходимо бронировать заранее. Накопив достаточно бонусов на \n\nПолучайте бонусы по специальным предложениям, например, проходя интервью или приглашая своих друзей к участию в программе.'
        },
        info: {
          title: 'Полезная информация',
          text: 'Полезная информация текст'
        },
        about: {
          title: 'О программе',
          text: 'О программе текст'
        }
      };

      self.faq = [
        {
          q: 'Как я могу потратить свои бонусы?',
          a: 'В разделе Сокровищница привилегий отражаются все привилегии, которые вам доступны.'
        },
        {
          q: 'Могу ли я пойти на любое событие, которое отражается в моем календаре событий?',
          a: 'Все события, которые отражаются в вашем календаре вам доступны'
        },
        {
          q: 'Как я могу стать участником про граммы лояльности?',
          a: 'Вам необходимо зайти на сайт <a href="#">http://iledebeaute.ru/</a>, в навигации выбрать “Программа лояльности”, после этого вы попадаете в свой личный кабинет'
        }
      ];

      return self;

    });

}(window.angular, window.SAILPLAY));