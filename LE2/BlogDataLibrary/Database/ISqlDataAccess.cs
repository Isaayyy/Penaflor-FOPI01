﻿
namespace BlogDataLibrary.Database
{
    public interface ISqlDataAccess
    {
        List<T> LoadDatae<T, U>(string sqlStatement, U parameters, string connectionStringName, bool isStoredProcedure);
        void SaveData<T>(string sqlStatement, T parameters, string connectionStringName, bool isStoredProcedure);
    }
}