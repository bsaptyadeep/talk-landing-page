import { Box } from '@mui/material'
import css from './styles.module.css';
import PostgresSQLLogo from '../../assets/images/postgresSQL-logo.png';
import MSSQLServerLogo from '../../assets/images/microsoft-sql-server.png';
import MySQLLogo from '../../assets/images/mysql.png';
import OracleDBLogo from '../../assets/images/oracle-database.png';
import MonogDBLogo from '../../assets/images/mongo-db.png';

const Features = () => {
    return (
        <Box className={css.featuresBox}>
            <h2 className={css.featureBoxHeading}>
                Database Supported:
            </h2>
            <Box className={css.dbLogoImageRow}>
                <img src={PostgresSQLLogo} alt="postgres-sql-logo" />
            </Box>
            <h2 className={css.featureBoxHeading}>
                Support Coming Soon for:
            </h2>
            <Box className={`${css.dbLogoImageRow} ${css.supportCommingSoon}`}>
                <img src={MonogDBLogo} alt="postgres-sql-logo" />
                <img src={MSSQLServerLogo} alt="postgres-sql-logo" />
                <img src={MySQLLogo} alt="postgres-sql-logo" />
                <img src={OracleDBLogo} alt="postgres-sql-logo" />
            </Box>
        </Box>
    )
}

export default Features