# HRnet

## Description
HRnet est une application React moderne construite avec Vite qui propose une interface utilisateur pour la gestion des ressources humaines. Cette application utilise les dernières technologies et bibliothèques React pour offrir une expérience utilisateur optimale.

## Prérequis
- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

## Technologies Utilisées
- React 18
- Vite
- Material-UI (MUI)
- Redux Toolkit
- React Router DOM
- Styled Components

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_DEPOT]
cd hrnet
```

2. Installez les dépendances :
```bash
npm install
# ou avec yarn
yarn install
```

## Scripts Disponibles

- `npm run dev` : Lance l'application en mode développement
- `npm run build` : Crée une version de production
- `npm run lint` : Exécute ESLint pour vérifier le code
- `npm run preview` : Prévisualise la version de production localement

## Structure des Dépendances

### Dépendances Principales
- `@mui/material` et composants associés pour l'interface utilisateur
- `@reduxjs/toolkit` et `react-redux` pour la gestion d'état
- `react-router-dom` pour la navigation
- `recharts` pour les visualisations de données
- `styled-components` pour le styling

### Dépendances de Développement
- Vite comme outil de build
- ESLint pour le linting
- Plugins React pour le développement

## Configuration
L'application utilise :
- Vite comme bundler
- ESLint pour la qualité du code
- Material-UI comme framework UI
- Redux Toolkit pour la gestion d'état

## Développement

Pour démarrer le développement :

1. Lancez le serveur de développement :
```bash
npm run dev
```

2. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur

## Bonnes Pratiques
- Utilisez ESLint pour maintenir la qualité du code
- Suivez les conventions de composants React
- Utilisez les hooks React de manière appropriée
- Respectez les principes de Material-UI pour l'interface

## Production

Pour construire l'application pour la production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist`.

