# Quality Lab 5 - CI/CD Pipeline

![Quality Gate](https://github.com/USERNAME/REPO/actions/workflows/quality-gate.yml/badge.svg)
![Nightly Build](https://github.com/USERNAME/REPO/actions/workflows/nightly-build.yml/badge.svg)

## Описание
Проект создан в рамках лабораторной работы по Управлению качеством.
Реализован полный цикл автоматизированного контроля качества веб-приложения.

## Выполненные дополнительные задания:
1. ✅ **Настроен Quality Gate**: PR в `main` блокируется, если падают lint, unit или e2e тесты.
2. ✅ **Визуальное регрессионное тестирование**: Добавлен скриншот-тест в Playwright (`toHaveScreenshot`).
3. ✅ **Nightly Build**: Настроен ночной запуск по cron с отправкой статуса на email.