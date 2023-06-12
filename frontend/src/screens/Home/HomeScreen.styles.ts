import { createStyles } from 'utils/createStyles'

export default createStyles(() => ({
  main: {
    borderWidth: 1,
    backgroundColor: '#11151E',
    flex: 1,
  },
  img: {
    width: 80,
    height: 80,
  },
  bar: {
    marginTop: 30,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
}))
